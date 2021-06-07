import {Button, Input, DatePicker} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

const components = [
  Button, Input, DatePicker
]

export function setupAntd(app) {
  components.forEach(component => {
    app.use(component)
  })
}