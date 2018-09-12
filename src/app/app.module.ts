import { TokentInterceptor } from './interceptors/token.interceptor';
import { AuthGuard } from './guards/auth.guard.service';
import { AuthenticationService } from './services/authentication.service';

import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CustomFormsModule} from 'ng2-validation';
import {
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentFileModule,
  CovalentMediaModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule
} from '@covalent/core';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {TypographyPageComponent} from './pages/typography-page/typography-page.component';
import {ColorPageComponent} from './pages/color-page/color-page.component';
import {ButtonsPageComponent} from './pages/buttons-page/buttons-page.component';
import {FormElementsPageComponent} from './pages/form-elements-page/form-elements-page.component';
import {FormWizardPageComponent} from './pages/form-wizard-page/form-wizard-page.component';
import {ChipsPageComponent} from './pages/chips-page/chips-page.component';
import {DialogPageComponent} from './pages/dialog-page/dialog-page.component';
import {GridListPageComponent} from './pages/grid-list-page/grid-list-page.component';
import {IconsPageComponent} from './pages/icons-page/icons-page.component';
import {ListPageComponent} from './pages/list-page/list-page.component';
import {MenuPageComponent} from './pages/menu-page/menu-page.component';
import {ProgressBarPageComponent} from './pages/progress-bar-page/progress-bar-page.component';
import {SpinnerPageComponent} from './pages/spinner-page/spinner-page.component';
import {SnackbarPageComponent} from './pages/snackbar-page/snackbar-page.component';
import {TabPageComponent} from './pages/tab-page/tab-page.component';
import {ToolbarPageComponent} from './pages/toolbar-page/toolbar-page.component';
import {TooltipPageComponent} from './pages/tooltip-page/tooltip-page.component';
import {SidenavPageComponent} from './pages/sidenav-page/sidenav-page.component';
import {FlexLayoutPageComponent} from './pages/flex-layout-page/flex-layout-page.component';
import {CardsPageComponent} from './pages/cards-page/cards-page.component';
import {LineChartPageComponent} from './pages/line-chart-page/line-chart-page.component';
import {BarChartPageComponent} from './pages/bar-chart-page/bar-chart-page.component';
import {BubbleChartPageComponent} from './pages/bubble-chart-page/bubble-chart-page.component';
import {HeatmapPageComponent} from './pages/heatmap-page/heatmap-page.component';
import {PieChartPageComponent} from './pages/pie-chart-page/pie-chart-page.component';
import {RadarPageComponent} from './pages/radar-page/radar-page.component';
import {TablePageComponent} from './pages/table-page/table-page.component';
import {ScrollPageComponent} from './pages/scroll-page/scroll-page.component';
import {FileUploadPageComponent} from './pages/file-upload-page/file-upload-page.component';
import {StepperPageComponent} from './pages/stepper-page/stepper-page.component';
import {ChatPageComponent} from './pages/chat-page/chat-page.component';
import {TestimonialsPageComponent} from './pages/testimonials-page/testimonials-page.component';
import {PricingTablesPageComponent} from './pages/pricing-tables-page/pricing-tables-page.component';
import {CartButtonComponent, ProductsPageComponent} from './pages/products-page/products-page.component';
import {ProductPageComponent} from './pages/product-page/product-page.component';
import {CartPageComponent} from './pages/cart-page/cart-page.component';
import {PortfolioPageComponent} from './pages/portfolio-page/portfolio-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SignUpPageComponent} from './pages/sign-up-page/sign-up-page.component';
import {PaletteComponent} from './pages/color-page/palette/palette.component';
import {DialogExampleComponent} from './pages/dialog-page/dialog-example.component';
import {SidemenuModule} from './sidemenu/sidemenu.module';
import {ResizeModule} from './resize/resize.module';
import {AppRoutesModule} from './routes/app-routes.module';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  OverlayModule,
  PortalModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularEchartsModule} from 'ngx-echarts';
import {MultiLanguagePageComponent } from './pages/multi-language-page/multi-language-page.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AuthConfig, AuthHttp} from 'angular2-jwt';
import {TOKEN_NAME, TENANT} from './services/auth.constants';
// import {SharedModule} from './shared/shared.module';
import { UserService } from './services/user.service';
import { PessoaService } from './services/pessoa.service';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {};

// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// export function authHttpServiceFactory(http: Http) {
//   return new AuthHttp(new AuthConfig({
//       headerPrefix: 'Bearer',
//       tokenName: TOKEN_NAME,
//       globalHeaders: [{'Content-Type': 'application/json'}],
//       noJwtError: false,
//       noTokenScheme: true,
//       tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
//   }), http);
// }

@NgModule({
  declarations: [
    AppComponent, MainPageComponent, PageNotFoundComponent, DashboardPageComponent, TypographyPageComponent,
    ColorPageComponent, PaletteComponent, ButtonsPageComponent, FormElementsPageComponent, FormWizardPageComponent,
    ChipsPageComponent, DialogPageComponent, DialogExampleComponent, GridListPageComponent, IconsPageComponent,
    ListPageComponent, MenuPageComponent, ProgressBarPageComponent, SpinnerPageComponent, SnackbarPageComponent,
    TabPageComponent, ToolbarPageComponent, TooltipPageComponent, SidenavPageComponent, FlexLayoutPageComponent,
    CardsPageComponent, LineChartPageComponent, BarChartPageComponent, BubbleChartPageComponent, HeatmapPageComponent,
    PieChartPageComponent, RadarPageComponent,
    TablePageComponent, ScrollPageComponent, FileUploadPageComponent,
    StepperPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ChatPageComponent,
    TestimonialsPageComponent,
    PricingTablesPageComponent,
    ProductsPageComponent,
    CartButtonComponent,
    CartPageComponent,
    ProductPageComponent,
    PortfolioPageComponent,
    MultiLanguagePageComponent
  ],
  entryComponents: [
    DialogExampleComponent, CartButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdChipsModule,
    MdCheckboxModule,
    MdDialogModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    OverlayModule,
    PortalModule,
    SidemenuModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
    FlexLayoutModule,
    CustomFormsModule,
    AngularEchartsModule,
    CovalentMediaModule,
    CovalentFileModule,
    CovalentStepsModule,
    CovalentDataTableModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentCommonModule,
    ResizeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    RouterModule,
    AppRoutesModule,
  ],
  providers: [
    // {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokentInterceptor,
      multi: true
    },
    AuthenticationService,
    UserService,
    PessoaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
