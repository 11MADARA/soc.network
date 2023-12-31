import Dialoges from "./dialoges";
import { add_MessageActionCreator, update_Message_TextActionCreator } from "../../redux/dialogsPageReducer";
import { connect } from "react-redux";
import { withRedirect } from "../../HOC/withNavigate";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: () => {
      let action = add_MessageActionCreator();
      dispatch(action);
    },
    onTextChange: (text) => {
      let action = update_Message_TextActionCreator(text);
      dispatch(action);
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRedirect
)(Dialoges);