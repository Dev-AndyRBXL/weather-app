import { getUserLocationName } from '../utils/getUsersLocation';

export default async function initialQuery() {
  const location = await getUserLocationName() ?? 'london';
  return {
    location,
    query: '',
    timestamp: Date.now(),
  };
}
