import registration, {initAccountState} from '@/reducers/registration';
import {
 requestRegistration,
 register
} from '@/actions/registrationActions';
import deepFreeze from 'deep-freeze';

test('Requesting Registration', () => {
  const beforeState = initAccountState;
  const afterState = {
    ...initAccountState,
    isRequesting: true
  };

  deepFreeze(beforeState);

  expect(
    registration(beforeState, requestRegistration())
  ).toEqual(afterState);
});

test('Succes Register Notification', () => {
  const beforeState = initAccountState;
  const registrationMessage = 'Test is the important thing for business!';
  const isRegistered = true;

  const afterState = {
    ...initAccountState,
    isRegistered,
    registrationMessage
  };

  deepFreeze(beforeState);

  expect(
    registration(beforeState, register(isRegistered, registrationMessage))
  ).toEqual(afterState);
});
