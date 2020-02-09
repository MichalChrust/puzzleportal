import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './views/statiscelements/header/header.component';
import { FooterComponent } from './views/statiscelements/footer/footer.component';
import { MainPageComponent } from './views/websitebody/main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AllGamesComponent } from './views/websitebody/all-games/all-games.component';
import { RankComponent } from './views/websitebody/rank/rank.component';
import { RulesComponent } from './views/websitebody/rules/rules.component';
import { HelpComponent } from './views/websitebody/help/help.component';
import { LogInComponent } from './views/websitebody/userinterface/log-in/log-in.component';
import { CreateAccountComponent } from './views/websitebody/userinterface/create-account/create-account.component';
import { LoggedUserAccountComponent } from './views/websitebody/userinterface/logged-user-account/logged-user-account.component';
import { AccountSuccesfullyCreatedComponent } from './views/websitebody/userinterface/account-succesfully-created/account-succesfully-created.component';
import { LogicGamesComponent } from './views/games/logicgameswindow/logic-games/logic-games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { QuizGamesComponent } from './views/games/quizwindow/quiz-games/quiz-games.component';
import { QuizLeftLabelComponent } from './views/games/quizwindow/quiz-left-label/quiz-left-label.component';
import { LogicGamesLeftLabelComponent } from './views/games/logicgameswindow/logic-games-left-label/logic-games-left-label.component';

import { LogicGameComponent } from './views/games/logicgameswindow/logic-game/logic-game.component';
// check it:
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { QuizGameComponent } from './views/games/quizwindow/quiz-game/quiz-game.component';

registerLocaleData(zh);

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
  { path: 'logicgame', component: LogicGamesComponent},
  { path: 'logicgame/:id', component: LogicGameComponent},
  { path: 'quizgame', component: QuizGamesComponent},
  { path: 'quizgame/:id', component: QuizGameComponent},
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
    LogicGamesComponent,
    QuizGamesComponent,
    QuizLeftLabelComponent,
    LogicGamesLeftLabelComponent,
    LogicGameComponent,
    QuizGameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
