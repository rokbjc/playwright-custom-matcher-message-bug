import { expect as expectBase, test, MatcherReturnType } from '@playwright/test';

const expect = expectBase.extend({
  toHaveCustomMessage: (receiver: any):MatcherReturnType => {
    return {
      pass: true,
      message: () => 'this message is expected to be shown in report',
    };
  }
  
});


test('test', async () => {
  expect(true).toHaveCustomMessage();
});
