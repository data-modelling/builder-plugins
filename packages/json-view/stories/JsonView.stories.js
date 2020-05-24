import React from 'react';
import {JsonView} from '../src/JsonView'
export default { title: 'JsonView' };
const theme={}
const schema={}
export const view = () => <JsonView theme={theme} schema={schema} />;

view.story={
    name:"JsonView"
}