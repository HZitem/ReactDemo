import React, {
    Component
} from "react";
interface State {
    component:any
} 

export default function asyncComponent(importComponent:any) {
    class AsyncComponent extends Component<{},State> {
        constructor(props:any) {
            super(props);
            this.state = {
                component: null
            };
        }
       async componentDidMount() {
            const {
                default: component
            } = await importComponent();
            this.setState({
                component: component
            });
        }
        render() {
            const C = this.state.component;
            return C ? < C {...this.props}/> : null;
        }
    }
    return AsyncComponent;

}