import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PacButton from './Components/PButton';
import PacSpinner from './Components/PSpinner';
import PacProgressbar from './Components/PProgressbar';
import PacIcon from './Components/PIcon';
import PacDivider from './Components/PDivider';
import PacButtonGroup from './Components/PButtonGroup';
import PacBackTop from './Components/PBackTop';
import PacAlert from './Components/PAlert';
import PacPagination from './Components/Navigation/PPagination';
import PacStep from './Components/Navigation/PStep';
import PacSteps from './Components/Navigation/PSteps';
import {PMessage} from './Components/Messages';
import PacCol from './Components/Layout/Grid/PCol';
import PacRow from './Components/Layout/Grid/PRow';
import PacModal from './Components/Feedback/Modal';
import PacSkeleton from './Components/Feedback/skeleton';
import PacDrawer from './Components/Feedback/PDrawer';
import PacDatePicker from './Components/Data Entry/Datepicker';
import PacMonthPicker from './Components/Data Entry/Datepicker/PMonthPicker';
import PacRangePicker from './Components/Data Entry/Datepicker/PRangePicker';
import PacWeekPicker from './Components/Data Entry/Datepicker/PWeekPicker';
import PacForm from './Components/Data Entry/Form';
import PacFormItem from './Components/Data Entry/Form/PFormItem';
import PacInput from './Components/Data Entry/Input';
import PacInputSearch from './Components/Data Entry/Input/PInputSearch';
import PacInputTextArea from './Components/Data Entry/Input/PInputTextArea';
import PacList from './Components/Data Entry/List';
import PacListItem from './Components/Data Entry/List/PListItem';
import PacListItemMeta from './Components/Data Entry/List/PListItemMeta';
import PacRadio from './Components/Data Entry/Radio';
import PacRadioGroup from './Components/Data Entry/Radio/PRadioGroup';
import PacRadioSolidButton from './Components/Data Entry/Radio/PRadioSolidButton';
import PacRate from './Components/Data Entry/Rate';
import PacSelect from './Components/Data Entry/Select' ;
import PacOPtionGroup from './Components/Data Entry/Select/POptGroup';
import PacOptions from './Components/Data Entry/Select/POptions';
import PacSwitch from './Components/Data Entry/switch';
import PacAutoComplete from './Components/Data Entry/PAutoComplete';
import PacCascader from './Components/Data Entry/PCascader';
import PacCheckBox from './Components/Data Entry/PCheckbox';
import PacCheckBoxGroup from './Components/Data Entry/PCheckboxGroup';
import PacSlider from './Components/Data Entry/PSlider' ;
import PacCard from './Components/Data Display/Card';
import PacCardMeta from './Components/Data Display/Card/CardMeta';
import PacCardGrid from './Components/Data Display/Card/PCardGrid';
import PacTable from './Components/Data Display/Table';
import PacTabs from './Components/Data Display/Tabs';
import PacTabPane from './Components/Data Display/Tabs/PTabPane';
import PacTimeLine from './Components/Data Display/Timeline';
import PacTimeLineItem from './Components/Data Display/Timeline/PTimelineItem';
import PacAvatar from './Components/Data Display/PAvatar' ;
import PacBadge from './Components/Data Display/PBadge';
import PacCalendar from './Components/Data Display/PCalendar' ;
import PacCarousel from './Components/Data Display/PCarousel';
import PacCollpase from './Components/Data Display/PCollapse';
import PacPanel from './Components/Data Display/PPanel';
import PacPopOver from './Components/Data Display/PPopover' ;
import PacTag from './Components/Data Display/PTag';
import PacToolTip from './Components/Data Display/PTooltip';
import PacAnchor from './Components/Anchor/PAnchor';
import PacLink from './Components/Anchor/PLink';



//import '../styles/test.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export {
    PacButton,
    PacSpinner,
    PacProgressbar,
    PacIcon,
    PacDivider,
    PacButtonGroup,
    PacBackTop,
    PacAlert,
    PacPagination,
    PacStep,
    PacSteps,
    PMessage,
    PacCol,
    PacRow,
    PacModal,
    PacSkeleton,
    PacDrawer,
    PacDatePicker,
    PacMonthPicker,
    PacRangePicker,
    PacWeekPicker,
    PacForm,
    PacFormItem,
    PacInput,
    PacInputSearch,
    PacInputTextArea,
    PacList,
    PacListItem,
    PacListItemMeta,
    PacRadio,
    PacRadioGroup,
    PacRadioSolidButton,
    PacRate,
    PacSelect,
    PacOPtionGroup,
    PacOptions,
    PacSwitch,
    PacAutoComplete,
    PacCascader,
    PacCheckBox,
    PacCheckBoxGroup,
    PacSlider,
    PacCard,
    PacCardMeta,
    PacCardGrid,
    PacTable,
    PacTabs,
    PacTabPane,
    PacTimeLine,
    PacTimeLineItem,
    PacAvatar,
    PacBadge,
    PacCalendar,
    PacCarousel,
    PacCollpase,
    PacPanel,
    PacPopOver,
    PacTag,
    PacToolTip,
    PacAnchor,
    PacLink
}
