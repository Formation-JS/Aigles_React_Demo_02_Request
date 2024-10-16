import axios from 'axios';
import { UserNat, UserGender, User } from '../@types/user';
import { RandomUserResult } from '../@types/request';

// https://randomuser.me/api/?nat=gb&gender=male
// nat -> AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US

export const getRandomUser = async (nat: UserNat, gender?: UserGender): Promise<User> => {

  const { data } = await axios.get<RandomUserResult>('https://randomuser.me/api', {
    params: { gender, nat }
  });

  return {
    firstname: data.results[0].name.first,
    lastname: data.results[0].name.last,
    gender: data.results[0].gender,
    email: data.results[0].email,
    nat: data.results[0].nat,
    picture: data.results[0].picture.large,
    birthdate: new Date(data.results[0].dob.date)
  };
};