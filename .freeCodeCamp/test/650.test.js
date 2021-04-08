const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should enter the suggested command', async () => {
    const lastLog = await getLastLog(true);
    const re = /^statement:truncate(students,gpas|gpas,students);freecodecampERROR:/i;

    assert(re.test(lastLog));
  });
});
