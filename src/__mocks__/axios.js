// We need to export a mock (faked) version ('jest.fn()') of this Axios module.
// This is our mocked out version of Axios:

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
};
