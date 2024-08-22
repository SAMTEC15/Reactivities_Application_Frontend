import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores/store";
import { Modal } from "semantic-ui-react";

export default observer(function ModelContainer() {
    const { modelStore } = useStore();
    return (
        <Modal open={modelStore.model.open} onClose={modelStore.closeModel} size='mini'>
        <Modal.Content>
            {modelStore.model.body}
        </Modal.Content>
        </Modal>
    )
})