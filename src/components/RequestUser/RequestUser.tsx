import useSWR from 'swr';
import { User, UserGender, UserNat } from '../../@types/user';
import { getRandomUser } from '../../services/randomUser.service';

type RequestUserProps = {
  gender?: UserGender,
  nat: UserNat
}

export default function RequestUser ({ nat, gender }: RequestUserProps) {

  const { isLoading, data, error } = useSWR(`${nat}|${gender}` , () => getRandomUser(nat, gender));

  return (
    <>
      <h3>Utilisateur...</h3>
      {isLoading ? (
        <p>Chargement...</p>
      ) : data ? (
        <RequestUserResult {...data} />
      ) : (
        <p>Erreur...</p>
      )}
    </>
  )
}

type RequestUserResultProps = User & { };

function RequestUserResult ({
  lastname, firstname, birthdate, email, gender, nat, picture
} : RequestUserResultProps) {

  return (
    <div>
      <p>{firstname} {lastname} ({nat} / {gender})</p>
      <p>Email : {email}</p>
      <p>Anniversaire : {birthdate.toLocaleDateString()}</p>
      <img src={picture} alt={`Image de ${firstname} ${lastname}`} />
    </div>
  )
}