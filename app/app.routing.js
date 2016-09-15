"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./components/home.component');
var login_component_1 = require("./components/login.component");
var register_component_1 = require("./components/register.component");
var appRoutes = [
    {
        path: '', component: home_component_1.HomeComponent
    },
    {
        path: 'home', component: home_component_1.HomeComponent
    },
    {
        path: 'register', component: register_component_1.RegisterComponent
    },
    {
        path: 'login', component: login_component_1.Login
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map