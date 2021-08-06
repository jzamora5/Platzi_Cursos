import gravatar from '../../utils/gravatar';

test('Gravatar Function test', () => {
  const email = 'jzamora_5@yahoo.com';
  const gravatarUrl =
    'https://gravatar.com/avatar/5c7c495b0603b38467961946839d2b99';
  expect(gravatarUrl).toEqual(gravatar(email));
});
