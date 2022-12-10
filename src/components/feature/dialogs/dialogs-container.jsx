import {sendMessageCreator} from '../../../redux/dialogs-reducer';
import {connect} from 'react-redux';

import Dialogs from './dialogs';
import { withAuthRedirect } from '../../../hoc/with-auth-redirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
};

const mapDispathToProps = (dispatch) => {
   return {
      sendMessage: (newMessageBody) => {
         dispatch(sendMessageCreator(newMessageBody));
      }
   }
};

export default compose(connect(mapStateToProps, mapDispathToProps), withAuthRedirect) (Dialogs);