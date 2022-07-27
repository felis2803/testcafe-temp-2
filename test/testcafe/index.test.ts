import { MyClass } from 'testcafe-temp-1';
import { body } from './model';

fixture `New Fixture`
    .page `about:blank`;
    
test(`New Test`, async t => {
    const myObject = new MyClass();

    myObject.hello('Alice');

    await t.expect(body.exists).ok();
});