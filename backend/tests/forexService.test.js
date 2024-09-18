const { fetchForexData } = require('../src/services/forexService');

jest.mock('axios');

describe('forexService', () => {
  it('should fetch and format forex data correctly', async () => {
    const mockResponse = {
      data: {
        'Time Series FX (Daily)': {
          '2023-05-01': { '4. close': '1.0987' },
          '2023-04-30': { '4. close': '1.1023' }
        }
      }
    };

    require('axios').get.mockResolvedValue(mockResponse);

    const result = await fetchForexData();

    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty('time', '2023-05-01');
    expect(result[0]).toHaveProperty('value', 1.0987);
  });
});