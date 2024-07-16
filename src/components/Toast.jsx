import * as Toast from "@radix-ui/react-toast";

const ToastComponent = () => (
  <Toast.Provider>
    <Toast.Root>
      <Toast.Title>Your Title Here</Toast.Title>{" "}
      {/* Ensure you add content to Title and Description */}
      <Toast.Description>Your Description Here</Toast.Description>
      <Toast.Action asChild action="close">
        <button>Close</button> {/* Example button for action */}
      </Toast.Action>
      <Toast.Close />
    </Toast.Root>
    <Toast.Viewport />
  </Toast.Provider>
);

ToastComponent.displayName = "ToastComponent";

export default ToastComponent;
