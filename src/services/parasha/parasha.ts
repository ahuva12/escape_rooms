import { http } from "../http";

//get current parasha
export const getCurrentParasha = async () => {
    try {
      const response = await http.get('/parasha');

      if (response.status !== 200)
        throw new Error(`${response.status}: Failed to get Parasha`);

      return response.data;
    } catch (error: any) {
      console.error('Error fetching Parasha:', error);
      throw new Error(`'Error fetching Parasha: ${error.message}`);
    }
};


