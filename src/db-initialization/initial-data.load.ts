import loadUsersInDB from './load/user.load';
import loadConversationsInDB from './load/conversation.load';
import getUserCount from './load/user.count.load';

export async function initialDataLoad() {
  const countUser: number = await getUserCount();
  if (countUser === 0) {
    await loadUsersInDB();
    await loadConversationsInDB();
  }
}
