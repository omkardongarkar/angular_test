import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

interface Conversation {
  id: string
  engagementLevel: {
    level: 'High' | 'Moderate' | 'Low'
    icon: string
    color: string
  }
  topic: {
    name: string
    icon: string
    color: string
  }
  dialogTurns: {
    count: number
    icon: string
  }
  duration: {
    minutes: number
    icon: string
  }
  avgUserSentiment: {
    score: number
    label: string
    icon: string
    color: string
  }
  dropoffSentiment: {
    label: string
    icon: string
    color: string
  }
}

@Component({
  selector: 'app-conversation-analytics',
  templateUrl: './conversation-analytics.component.html',
  styleUrls: ['./conversation-analytics.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ConversationAnalyticsComponent implements OnInit, AfterViewInit {
  @ViewChild('barChart') barChart!: ElementRef
  chart: any

  dateRange = 'Jul 1st - Sep 30'
  selectedPeriod = 'Custom'

  conversations: Conversation[] = [
    {
      id: '01f8a6ea-42d6-42ae-9336-6c9220ff9deb',
      engagementLevel: {
        level: 'High',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc27a5b5d581e0b7aa5e873fac768da514609b8747b94b861c79d544e8eb60f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
      topic: {
        name: 'Payments',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59a19840bddf770474c3683790394e8b8d70d9bd9959e27d9d0ca0dda4f3754a?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(165, 180, 252, 1)',
      },
      dialogTurns: {
        count: 37,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 15,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/34987d4f65ba204083373305ac668935a6b616c255be9ef6dc64ad161d18af88?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'b3c1e4f2-7a8d-4c5b-9b1e-3c8a4e5f9d1a',
      engagementLevel: {
        level: 'High',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc27a5b5d581e0b7aa5e873fac768da514609b8747b94b861c79d544e8eb60f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
      topic: {
        name: 'Scheduling',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59a19840bddf770474c3683790394e8b8d70d9bd9959e27d9d0ca0dda4f3754a?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(165, 180, 252, 1)',
      },
      dialogTurns: {
        count: 54,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 7,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/962a19bfe866f3fd96909c8c1e80d63971deafbf1861a0002b6d7dffc5066b72?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'd4f2b3c1-6e8a-4c5b-9b1e-3c8a4e5f9d1b',
      engagementLevel: {
        level: 'Low',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d5aeafd7de0b306b43512e430b55a402cfec9cba53889acd8bb1824f8ca79eb7?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(252, 165, 165, 1)',
      },
      topic: {
        name: 'None',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e671cef3d6303d5515160e41d541e792cfe915133441d20abb1658152bf38515?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dialogTurns: {
        count: 29,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 22,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b9e2014a1b7a64ec5ddf88d194175d59d65a2158f018ef7a5ea0861fa1b3df14?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'c5e2a4f3-8b9d-4c5b-9b1e-3c8a4e5f9d1c',
      engagementLevel: {
        level: 'High',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc27a5b5d581e0b7aa5e873fac768da514609b8747b94b861c79d544e8eb60f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
      topic: {
        name: 'Payments',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59a19840bddf770474c3683790394e8b8d70d9bd9959e27d9d0ca0dda4f3754a?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(165, 180, 252, 1)',
      },
      dialogTurns: {
        count: 73,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 10,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc1b7589cbd2b0c6c0d3a5e92b46f68eeaa006c13dbbc4a759574ae3a2aed9f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Very Positive',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f93427793ebf22f77ad899ba8568e7b82c0fde715cc5731015e240f4f2439144?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
    },
    {
      id: 'f6a1b2c3-9e8d-4c5b-9b1e-3c8a4e5f9d1d',
      engagementLevel: {
        level: 'Moderate',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9bc6f798de8b60b718a624e270c836626e9565f5dc2afc506de351c244bbbc0d?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(252, 211, 77, 1)',
      },
      topic: {
        name: 'Healthcare',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c55de98ff6acc814c98b035b8dd604b7ed90caaed5cd9b044af8f5819c830e63?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(253, 186, 116, 1)',
      },
      dialogTurns: {
        count: 45,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 29,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/13b8639525911a4f75fd2ae05e99d4ac62f14e8daed848f2d0c45b68462002e5?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'e7b2c3d4-0f8d-4c5b-9b1e-3c8a4e5f9d1e',
      engagementLevel: {
        level: 'High',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc27a5b5d581e0b7aa5e873fac768da514609b8747b94b861c79d544e8eb60f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
      topic: {
        name: 'Services',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/da96f1c3a932feaa2c9e8591a28dbb6ebd3e3052388a306a8f028d172e7c4f0e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(216, 180, 254, 1)',
      },
      dialogTurns: {
        count: 68,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 3,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a3d4507ed286582568e85dc4a47950ba35dd331c2a88228cb09a1ea1a96abba?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'a8c3d4e5-1g9d-4c5b-9b1e-3c8a4e5f9d1f',
      engagementLevel: {
        level: 'Low',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d5aeafd7de0b306b43512e430b55a402cfec9cba53889acd8bb1824f8ca79eb7?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(252, 165, 165, 1)',
      },
      topic: {
        name: 'Healthcare',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c55de98ff6acc814c98b035b8dd604b7ed90caaed5cd9b044af8f5819c830e63?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(253, 186, 116, 1)',
      },
      dialogTurns: {
        count: 12,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 18,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/795069a2fc97cfbb0ef5b4d46d4d3607281e17c6ded80702cf7053fb96825e5d?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'b9d4e5f6-2h8d-4c5b-9b1e-3c8a4e5f9d1g',
      engagementLevel: {
        level: 'Moderate',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9bc6f798de8b60b718a624e270c836626e9565f5dc2afc506de351c244bbbc0d?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(252, 211, 77, 1)',
      },
      topic: {
        name: 'None',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e671cef3d6303d5515160e41d541e792cfe915133441d20abb1658152bf38515?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dialogTurns: {
        count: 76,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 25,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c35e90f04ee989fc9aea280c2a0089982eec7928c9b131bee13565d0cc9076b7?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'c0e5f6g7-3i8d-4c5b-9b1e-3c8a4e5f9d1h',
      engagementLevel: {
        level: 'High',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc27a5b5d581e0b7aa5e873fac768da514609b8747b94b861c79d544e8eb60f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
      topic: {
        name: 'Services',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/da96f1c3a932feaa2c9e8591a28dbb6ebd3e3052388a306a8f028d172e7c4f0e?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(216, 180, 254, 1)',
      },
      dialogTurns: {
        count: 33,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 12,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ce18c8814053af8d428d0154f554d8e499ad199a941198129bb8a2f46a218b2?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'd1f6g7h8-4j8d-4c5b-9b1e-3c8a4e5f9d1i',
      engagementLevel: {
        level: 'Moderate',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9bc6f798de8b60b718a624e270c836626e9565f5dc2afc506de351c244bbbc0d?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(252, 211, 77, 1)',
      },
      topic: {
        name: 'Payments',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/59a19840bddf770474c3683790394e8b8d70d9bd9959e27d9d0ca0dda4f3754a?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(165, 180, 252, 1)',
      },
      dialogTurns: {
        count: 58,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 30,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d754e988024d89d0b530b068ca2a2e40ef14c1d0a779772d160288a3c7515983?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
    {
      id: 'e2g7h8i9-5k8d-4c5b-9b1e-3c8a4e5f9d1j',
      engagementLevel: {
        level: 'High',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fc27a5b5d581e0b7aa5e873fac768da514609b8747b94b861c79d544e8eb60f?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(134, 239, 172, 1)',
      },
      topic: {
        name: 'Personal',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3490261ed5c70f7070324571bd4236361a43d1229b63c9b732017ea2245758e1?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(94, 234, 212, 1)',
      },
      dialogTurns: {
        count: 21,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d08307ff00b2b2b58c64b8da89abdc192aabb452a144ec5ea2e730c90fd55545?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      duration: {
        minutes: 5,
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f50386bb8a6a13d86000b107f0a7d592c4b4330a89ddd82cdc98c92e5794d9a3?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
      },
      avgUserSentiment: {
        score: 3.0,
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
      dropoffSentiment: {
        label: 'Neutral',
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/73cadf02ccc616817d9ece0b277d492074913e02a0d4e9b6c300dd2489ffd778?placeholderIfAbsent=true&apiKey=43632c7bd1d84079a851d9b51a08f2e5',
        color: 'rgba(212, 212, 212, 1)',
      },
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void {
    // Sample data for the chart
    const chartData = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '14', '21', '30'],
      datasets: [
        {
          label: 'Conversation Drop-off',
          data: [100, 65, 30, 10, 5, 5, 3, 3, 3, 3],
          backgroundColor: 'rgba(137, 121, 255, 1)',
          borderColor: 'rgba(137, 121, 255, 1)',
          borderWidth: 1,
        },
      ],
    }

    // Chart configuration
    this.chart = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 50,
            },
            grid: {
              color: 'rgba(0, 0, 26, 0.15)',

            },
          },
          x: {
            grid: {
              display: true,
              color: 'rgba(0, 0, 26, 0.15)',
  
            },
          },
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    })
  }
}
