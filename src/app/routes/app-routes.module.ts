import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {TypographyPageComponent} from '../pages/typography-page/typography-page.component';
import {ColorPageComponent} from '../pages/color-page/color-page.component';
import {ButtonsPageComponent} from '../pages/buttons-page/buttons-page.component';
import {FormElementsPageComponent} from '../pages/form-elements-page/form-elements-page.component';
import {FormWizardPageComponent} from '../pages/form-wizard-page/form-wizard-page.component';
import {ChipsPageComponent} from '../pages/chips-page/chips-page.component';
import {DialogPageComponent} from '../pages/dialog-page/dialog-page.component';
import {GridListPageComponent} from '../pages/grid-list-page/grid-list-page.component';
import {IconsPageComponent} from '../pages/icons-page/icons-page.component';
import {ListPageComponent} from '../pages/list-page/list-page.component';
import {MenuPageComponent} from '../pages/menu-page/menu-page.component';
import {ProgressBarPageComponent} from '../pages/progress-bar-page/progress-bar-page.component';
import {SpinnerPageComponent} from '../pages/spinner-page/spinner-page.component';
import {SnackbarPageComponent} from '../pages/snackbar-page/snackbar-page.component';
import {TabPageComponent} from '../pages/tab-page/tab-page.component';
import {ToolbarPageComponent} from '../pages/toolbar-page/toolbar-page.component';
import {TooltipPageComponent} from '../pages/tooltip-page/tooltip-page.component';
import {NgModule} from '@angular/core';
import {SidenavPageComponent} from '../pages/sidenav-page/sidenav-page.component';
import {FlexLayoutPageComponent} from '../pages/flex-layout-page/flex-layout-page.component';
import {CardsPageComponent} from '../pages/cards-page/cards-page.component';
import {LineChartPageComponent} from '../pages/line-chart-page/line-chart-page.component';
import {BarChartPageComponent} from '../pages/bar-chart-page/bar-chart-page.component';
import {BubbleChartPageComponent} from '../pages/bubble-chart-page/bubble-chart-page.component';
import {HeatmapPageComponent} from '../pages/heatmap-page/heatmap-page.component';
import {PieChartPageComponent} from '../pages/pie-chart-page/pie-chart-page.component';
import {RadarPageComponent} from '../pages/radar-page/radar-page.component';
import {TablePageComponent} from '../pages/table-page/table-page.component';
import {ScrollPageComponent} from '../pages/scroll-page/scroll-page.component';
import {FileUploadPageComponent} from '../pages/file-upload-page/file-upload-page.component';
import {StepperPageComponent} from '../pages/stepper-page/stepper-page.component';
import {ChatPageComponent} from '../pages/chat-page/chat-page.component';
import {TestimonialsPageComponent} from '../pages/testimonials-page/testimonials-page.component';
import {PricingTablesPageComponent} from '../pages/pricing-tables-page/pricing-tables-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';
import {ProductPageComponent} from '../pages/product-page/product-page.component';
import {CartPageComponent} from '../pages/cart-page/cart-page.component';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {SignUpPageComponent} from '../pages/sign-up-page/sign-up-page.component';
import { AuthGuard } from '../guards/auth.guard.service';


const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
    {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
    {path: 'typography', component: TypographyPageComponent},
    {path: 'color', component: ColorPageComponent},
    {path: 'buttons', component: ButtonsPageComponent},
    {path: 'form-elements', component: FormElementsPageComponent},
    {path: 'form-wizard', component: FormWizardPageComponent},
    {path: 'chips', component: ChipsPageComponent},
    {path: 'dialog', component: DialogPageComponent},
    {path: 'grid-list', component: GridListPageComponent},
    {path: 'icons', component: IconsPageComponent},
    {path: 'list', component: ListPageComponent},
    {path: 'menu', component: MenuPageComponent},
    {path: 'progress-bar', component: ProgressBarPageComponent},
    {path: 'spinner', component: SpinnerPageComponent},
    {path: 'snackbar', component: SnackbarPageComponent},
    {path: 'tabs', component: TabPageComponent},
    {path: 'toolbar', component: ToolbarPageComponent},
    {path: 'tooltip', component: TooltipPageComponent},
    {path: 'sidenav', component: SidenavPageComponent},
    {path: 'flex-layout', component: FlexLayoutPageComponent},
    {path: 'cards', component: CardsPageComponent},
    {path: 'line-chart', component: LineChartPageComponent},
    {path: 'bar-chart', component: BarChartPageComponent},
    {path: 'bubble-chart', component: BubbleChartPageComponent},
    {path: 'heatmap', component: HeatmapPageComponent},
    {path: 'piechart', component: PieChartPageComponent},
    {path: 'radar', component: RadarPageComponent},
    {path: 'editor', loadChildren: 'app/pages/editor-page/editor-page.module#EditorPageModule'},
    {path: 'table', component: TablePageComponent},
    {path: 'scroll', component: ScrollPageComponent},
    {path: 'drag', loadChildren: 'app/pages/drag-and-drop-page/drag-and-drop-page.module#DragAndDropPageModule'},
    {path: 'datepicker', loadChildren: 'app/pages/datepicker-page/datepicker-page.module#DatepickerPageModule'},
    {path: 'fileupload', component: FileUploadPageComponent},
    {path: 'stepper', component: StepperPageComponent},
    {path: 'google-maps', loadChildren: 'app/pages/google-map-page/google-map-page.module#GoogleMapPageModule'},
    {path: 'chat', component: ChatPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'pricing-tables', component: PricingTablesPageComponent},
    {path: 'products', component: ProductsPageComponent},
    {path: 'product', component: ProductPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'cadastro-usuario', loadChildren: 'app/pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioModule', canActivate: [AuthGuard]},
    {path: 'cadastro-pessoa', loadChildren: 'app/pages/cadastro-aluno/cadastro-aluno.module#CadastroAlunoModule', canActivate: [AuthGuard]},
    {path: 'cadastro-pessoa/:uuid', loadChildren: 'app/pages/cadastro-aluno/cadastro-aluno.module#CadastroAlunoModule', canActivate: [AuthGuard]},
    {path: 'cadastro-livro', loadChildren: 'app/pages/cadastro-livro/cadastro-livro.module#CadastroLivroModule', canActivate: [AuthGuard]},
    {path: 'cadastro-livro/:uuid', loadChildren: 'app/pages/cadastro-livro/cadastro-livro.module#CadastroLivroModule', canActivate: [AuthGuard]},
    {path: 'cadastro-turma', loadChildren: 'app/pages/cadastro-turma/cadastro-turma.module#CadastroTurmaModule', canActivate: [AuthGuard]},
    {path: 'cadastro-turma/:uuid', loadChildren: 'app/pages/cadastro-turma/cadastro-turma.module#CadastroTurmaModule', canActivate: [AuthGuard]},
    {path: 'cadastro-editora', loadChildren: 'app/pages/cadastro-editora/cadastro-editora.module#CadastroEditoraModule', canActivate: [AuthGuard]},
    {path: 'cadastro-editora/:uuid', loadChildren: 'app/pages/cadastro-editora/cadastro-editora.module#CadastroEditoraModule', canActivate: [AuthGuard]},
    {path: 'cadastro-autor', loadChildren: 'app/pages/cadastro-autor/cadastro-autor.module#CadastroAutorModule', canActivate: [AuthGuard]},
    {path: 'cadastro-autor/:uuid', loadChildren: 'app/pages/cadastro-autor/cadastro-autor.module#CadastroAutorModule', canActivate: [AuthGuard]},
    {path: 'consulta-pessoa', loadChildren: 'app/pages/consulta-aluno/consulta-aluno.module#ConsultaAlunoModule', canActivate: [AuthGuard]},
    {path: 'consulta-livro', loadChildren: 'app/pages/consulta-livro/consulta-livro.module#ConsultaLivroModule', canActivate: [AuthGuard]},
    {path: 'consulta-turma', loadChildren: 'app/pages/consulta-turma/consulta-turma.module#ConsultaTurmaModule', canActivate: [AuthGuard]},
    {path: 'consulta-editora', loadChildren: 'app/pages/consulta-editora/consulta-editora.module#ConsultaEditoraModule', canActivate: [AuthGuard]},
    {path: 'consulta-autor', loadChildren: 'app/pages/consulta-autor/consulta-autor.module#ConsultaAutorModule', canActivate: [AuthGuard]},
    {path: 'emprestimo-livro', loadChildren: 'app/pages/emprestimo-livro/emprestimo-livro.module#EmprestimoLivroModule', canActivate: [AuthGuard]},
    {path: 'devolucao-livro/:uuid', loadChildren: 'app/pages/devolucao-livro/devolucao-livro.module#DevolucaoLivroModule', canActivate: [AuthGuard]},
    {path: 'consulta-emprestimo-livro', loadChildren: 'app/pages/consulta-emprestimo-livro/consulta-emprestimo-livro.module#ConsultaEmprestimoLivroModule', canActivate: [AuthGuard]},
    {path: 'consulta-emprestimo-detalhado', loadChildren: 'app/pages/consulta-emprestimo-detalhado/consulta-emprestimo-detalhado.module#ConsultaEmprestimoDetalhadoModule', canActivate: [AuthGuard]},
    {path: '', redirectTo: '/main/dashboard', pathMatch: 'prefix'},
    {path: '**', redirectTo: '/main/dashboard', pathMatch: 'prefix'}
  ]
  },
  {path: '404', component: PageNotFoundComponent},

  
  {path: 'login', component: LoginPageComponent},
  {path: 'sign-up', component: SignUpPageComponent},
{path: '', redirectTo: '/main/dashboard', pathMatch: 'prefix'},
  {path: '**', redirectTo: '/main/dashboard', pathMatch: 'prefix'}
  // {path: '', redirectTo: 'login', pathMatch: 'prefix'},
  // {path: '**', redirectTo: 'login', pathMatch: 'prefix'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, { useHash: true }),

    // RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
