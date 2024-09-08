type BaseErrorResponse = {
  message: string;
  response?: {
    data: {
      errors: {
        email?: string[];
        password?: string[];
      };
    };
  };
};

export default BaseErrorResponse;
