import Component from '@glimmer/component';

export default class ContestContestEditorComponent extends Component {
  selectedTab = null
  tabs = [
    {
      name: 'Details',
      component: 'contest/contest-editor/detail-editor'
    },
    {
      name: 'Permission Settings',
      component: 'contest/contest-editor/detail-editor'
    },
    {
      name: 'Challenges',
      component: 'contest/contest-editor/detail-editor'
    },
    {
      name: 'Advanced Settings',
      component: 'contest/contest-editor/detail-editor'
    },
    {
      name: 'Allowed Users',
      component: 'contest/contest-editor/detail-editor'
    },
  ]
}
