import Component from '@glimmer/component';

export default class ContestContestEditorComponent extends Component {
  selectedTab = null
  tabs = [
    {
      name: 'Details',
      component: 'contest/contest-editor/detail-editor'
    }
  ]
}
