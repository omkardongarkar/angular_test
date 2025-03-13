import { Component, OnChanges, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navbar/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/product-support/product-support.component';
import { CommonUtilityService } from './services/common-utility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CommonModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ChatSee';
  currentRoute: string = '';
  headerTitle: string = '';
  imgSource: string = '';

  isSidebarCollapsed!: boolean;
  isLoginPage: boolean;

  handleSidebarStateChange(state: boolean) {
    setTimeout(() => {
      this.isSidebarCollapsed = state;
      console.log('Sidebar state in parent:', this.isSidebarCollapsed);
    });
  }

  constructor(private router: Router, private CommonUtility: CommonUtilityService) {
    this.isLoginPage = false;

    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url; // Get current URL

      if (this.currentRoute === '' || this.currentRoute === '/' || this.currentRoute === '/signIn') {
        this.isLoginPage = true;
      } else {
        this.isLoginPage = false;
      }

      console.log("currentRoute : ", this.currentRoute);
      console.log("islogin: ", this.isLoginPage);

    });
  }


  // Hide navbar if the current URL is the root URL
  shouldShowNavbar(): boolean {
    const routeMap: Record<string, { img: string; title: string }> = {
      '/cross-agent': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ceef28252cebf003ca48ebd5884ec59036b3448906db0e5ff1a02b8b723cb98c?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Cross Agent Performance'
      },
      '/home': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ceef28252cebf003ca48ebd5884ec59036b3448906db0e5ff1a02b8b723cb98c?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Home'
      },
      '/query': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c24192757a4a54f70d8accd0b5185e28e087cd18f1f2a7b92e2e31b37ba11?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Custom Business Query'
      },
      '/customdash': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c24192757a4a54f70d8accd0b5185e28e087cd18f1f2a7b92e2e31b37ba11?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Custom Dashboards'
      },
      '/topic': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a225395e8ef7e13e22ce1ec1b120bc709d2e02d475fbb1caa3415c5ad303c5c6?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Topics'
      },
      '/userintent': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c24192757a4a54f70d8accd0b5185e28e087cd18f1f2a7b92e2e31b37ba11?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Intent'
      },
      '/actions': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c24192757a4a54f70d8accd0b5185e28e087cd18f1f2a7b92e2e31b37ba11?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Actions'
      },
      '/sentiment': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/403c24192757a4a54f70d8accd0b5185e28e087cd18f1f2a7b92e2e31b37ba11?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Sentiment'
      },
      '/risk': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/24e7ce02f852c05d3690d2a3f77cd4d38f3704581bf61bcb9721df7af7e389b7?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Risky Behaviour'
      },
      '/emotion': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d3cecae2295b454c5b8b39447b8f1d00b1487e7c7eb803b15f2dcf4b16fc3e79?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Emotional Patterns'
      },
      '/userGeography': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1ad6b610eae112d4ce3f9ce3c6d35030df9e9472178c6b24b255779976f7be33?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Geography'
      },
      '/flow': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/43dc7782a0bf374b5c6eff259e7c9e9963cfe6a2a753b4c5798b3ceef1cb4510?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Flow and Drop-off'
      },
      '/retention': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Retention'
      },
      '/users': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Users'
      },
      '/usertypes': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User Types'
      },
      '/conversation': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Conversations Map'
      },
      '/usertesting': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'User A/B Testing'
      },
      '/rag': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'RAG Sources'
      },
      '/errorRate': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Error Interactions'
      },
      '/help': {
        img: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ace2c6e454a675256f773ed87638f22e175563a9184518052c67460c8c8e5f3e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Help'
      },
      '/settings': {
        img: 'https://cdn.builder.io/api/v1/image/assets/43632c7bd1d84079a851d9b51a08f2e5/d380de9621d12564416b1be22bdcdad688bf9f0696601e49f76efd56ce7afe0b?apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        title: 'Settings'
      }
    };

    // Get the current route details from the map
    const routeData = routeMap[this.currentRoute];
    if (routeData) {
      this.imgSource = routeData.img;
      this.headerTitle = routeData.title;
    }

    return this.router.url !== '/';
  }

  onSettingClick() {
    this.router.navigate(['/settings']);
  }
}
