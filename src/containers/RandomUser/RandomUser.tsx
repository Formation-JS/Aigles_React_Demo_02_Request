import { useState } from 'react';
import { UserGender, UserNat } from '../../@types/user';
import RequestUser from '../../components/RequestUser/RequestUser';

export default function RandomUser() {

  const [data, setData] = useState<{nat: UserNat, gender?: UserGender}>();

  const handleSearchUser = () => {
    setData({ gender: undefined, nat: 'FR' })
  }

  return (
    <div>
      <h2>Obtenir une personne</h2>
      {/* TODO Faire le formulaire */}
      <button onClick={handleSearchUser}>Rechercher</button>

      {data && (
        <>
          <RequestUser {...data} />
        </>
      )}

    </div>
  );
}