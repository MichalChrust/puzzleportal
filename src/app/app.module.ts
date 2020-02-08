import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './statiscelements/header/header.component';
import { FooterComponent } from './statiscelements/footer/footer.component';
import { MainPageComponent } from './websitebody/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './websitebody/all-games/all-games.component';
import { RankComponent } from './websitebody/rank/rank.component';
import { RulesComponent } from './websitebody/rules/rules.component';
import { HelpComponent } from './websitebody/help/help.component';
import { LogInComponent } from './websitebody/userinterface/log-in/log-in.component';
import { CreateAccountComponent } from './websitebody/userinterface/create-account/create-account.component';
import { LoggedUserAccountComponent } from './websitebody/userinterface/logged-user-account/logged-user-account.component';
import { AccountSuccesfullyCreatedComponent } from './websitebody/userinterface/account-succesfully-created/account-succesfully-created.component';
import { LeftlabelComponent } from './games/logicgameswindow/leftlabel/leftlabel.component';
import { LogicGamesComponent } from './games/logicgameswindow/logic-games/logic-games.component';

const appRoutes: Routes = [
  { path: 'home', component: MainPageComponent},
  { path: 'allgames', component: AllGamesComponent},
  { path: 'rank', component: RankComponent},
  { path: 'rules', component: RulesComponent},
  { path: 'help', component: HelpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'account', component: LoggedUserAccountComponent},
  { path: 'createaccount', component: CreateAccountComponent},
  { path: 'accountcreated', component: AccountSuccesfullyCreatedComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AllGamesComponent,
    RankComponent,
    RulesComponent,
    HelpComponent,
    LogInComponent,
    CreateAccountComponent,
    LoggedUserAccountComponent,
    AccountSuccesfullyCreatedComponent,
    LeftlabelComponent,
    LogicGamesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
