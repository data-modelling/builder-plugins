import React from 'react';
import {Schema,emptySchema} from '../src/graphQLHelpers'
export default { title: 'Test2' };

console.log(Schema);
console.log(emptySchema);

export const simpleTest2 = () => <div>Testing storybook</div>;

simpleTest2.story={
    name:"Testing2"
}