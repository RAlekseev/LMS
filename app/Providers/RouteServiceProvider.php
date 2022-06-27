<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * This is used by Laravel authentication to redirect users after login.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * The Version of application api.
     *
     * @var string
     */
    public const API_PREFIX = 'api';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });

        Route::pattern('id', '[0-9]+');
        $this->map();
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapModulesRoutes();
    }

    /**
     * Define the "modules" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapModulesRoutes()
    {
        $modules_folder = app_path('Modules');
        $modules = $this->getModulesList($modules_folder);

        foreach ($modules as $module) {
            $routesPath = $modules_folder.DIRECTORY_SEPARATOR.$module.DIRECTORY_SEPARATOR.'routes_api.php';

            if (file_exists($routesPath)) {
                Route::prefix(self::API_PREFIX)
                    ->middleware(['api', 'auth:sanctum'])
                    ->namespace("\\App\\Modules\\$module\Controllers")
                    ->group($routesPath);
            }
        }
    }

    /**
     * @param string $modules_folder
     * @return array
     */
    private function getModulesList(string $modules_folder): array
    {
        return
            array_values(
                array_filter(
                    scandir($modules_folder),
                    function ($item) use ($modules_folder) {
                        return is_dir($modules_folder.DIRECTORY_SEPARATOR.$item) && ! in_array($item, ['.', '..']);
                    }
                )
            );
    }
}
