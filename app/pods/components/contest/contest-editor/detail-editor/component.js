import Component from '@glimmer/component';

export default class ContestContestEditorDetailEditorComponent extends Component {
  contestTypes = [
    { value: '', name: 'default' },
    { value: 'hiring_contest', name: 'hiring_contest' },
    { value: 'practice', name: 'practice' },
    { value: 'dcb', name: 'dcb' },
    { value: 'college_contest', name: 'college_contest' },
    { value: 'competition_contest', name: 'competition_contest' },
    { value: 'admission_contest', name: 'admission_contest' },
    { value: 'course_contest', name: 'course_contest' }
  ]
}
