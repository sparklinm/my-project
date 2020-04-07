import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Todo from './views/Todo.vue'
import TodoSet from './views/TodoSet.vue'
import DoTodo from './views/DoTodo.vue'
import Statistics from './views/Statistics.vue'
import StatisticsOne from './views/StatisticsOne.vue'
import TimeAxis from './views/TimeAxis.vue'
import TimeAxisOne from './views/TimeAxisOne.vue'
import FuturePlan from './views/FuturePlan.vue'
import Setting from './views/Setting.vue'
import PomodoroSetting from './views/PomodoroSetting.vue'
import CustomMotto from './views/CustomMotto.vue'
import AppearanceSetting from './views/AppearanceSetting.vue'
import OtherSettings from './views/OtherSettings.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Todo,
          meta: {
            parent: true
          }
        },
        {
          path: '/set',
          component: TodoSet,
          meta: {
            parent: true
          }
        },
        {
          path: '/statistics',
          component: Statistics
        },
        {
          path: '/time_axis',
          component: TimeAxis
        },
        {
          path: '/future_plan',
          component: FuturePlan
        },
        {
          path: '/me',
          component: Setting,
          meta: {
            parent: true
          }
        }
      ]

    },
    {
      name: 'do',
      path: '/do/:id',
      component: DoTodo,
      meta: {
        child: true
      }
    },
    {
      path: '/statistics/:id',
      component: StatisticsOne,
      meta: {
        child: true
      }
    },
    {
      path: '/time_axis/:id',
      component: TimeAxisOne,
      meta: {
        child: true
      }
    },
    {
      path: '/pomodoro_setting',
      component: PomodoroSetting,
      meta: {
        parent: true,
        child: true
      }
    },
    {
      path: '/custom_motto',
      component: CustomMotto,
      meta: {
        child: true
      }
    },
    {
      path: '/appearance_setting',
      component: AppearanceSetting,
      meta: {
        child: true
      }
    },
    {
      path: '/other_setting',
      component: OtherSettings,
      meta: {
        child: true
      }
    }
  ]
})

export default router


