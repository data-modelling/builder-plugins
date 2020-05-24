import React from 'react';
import {default as JsonView} from '../src/JsonView'
export default { title: 'JsonView' };
const theme={}
const schema={"test":"Testing"}
export const view = () => <JsonView theme={theme} schema={schema} />;

view.story={
    name:"JsonView"
}