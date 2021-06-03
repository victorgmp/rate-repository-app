import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  getKey(key) {
    return `${this.namespace}:${key}`;
  }

  async getAccessToken() {
    const accessToken = await AsyncStorage.getItem(this.getKey('access-token'));

    return accessToken;
  }

  async setAccessToken(accessToken) {
    return await AsyncStorage.setItem(this.getKey('access-token'), accessToken);
  }

  async removeAccessToken() {
    return await AsyncStorage.removeItem(this.getKey('access-token'));
  }
}

export default AuthStorage;
