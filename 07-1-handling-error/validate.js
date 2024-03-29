const { join } = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

(() => {
  try {
    execSync('node -c app.js', { cwd: __dirname });

    const originalUserCode = fs.readFileSync(join(__dirname, 'app.js'), 'utf-8');
    const additionalCodeToTest = 'CmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpLnN0cmljdDsKCnRyeSB7CiAgYXNzZXJ0LmRlZXBFcXVhbChwYXJzZVVSTCgnaHR0cHM6Ly9leGFtcGxlLmNvbScpLCBuZXcgVVJMKCdodHRwczovL2V4YW1wbGUuY29tJyksICdVUkwgeWFuZyBkaWhhc2lsa2FuIHRpZGFrIHNlc3VhaS4gUGFzdGlrYW4gZnVuZ3NpIG1lbmdlbWJhbGlrYW4gb2JqZWsgZGFyaSA8Y29kZT5VUkw8L2NvZGU+LiBIYXJhcCBkaWNlayBrZW1iYWxpLCB5YSEnKTsKICBhc3NlcnQuZGVlcEVxdWFsKHBhcnNlVVJMKCdodHRwczovL2V4YW1wbGUuY29tLycpLCBuZXcgVVJMKCdodHRwczovL2V4YW1wbGUuY29tLycpLCAnVVJMIHlhbmcgZGloYXNpbGthbiB0aWRhayBzZXN1YWkuIFBhc3Rpa2FuIGZ1bmdzaSBtZW5nZW1iYWxpa2FuIG9iamVrIGRhcmkgPGNvZGU+VVJMPC9jb2RlPi4gSGFyYXAgZGljZWsga2VtYmFsaSwgeWEhJyk7CiAgYXNzZXJ0LmRlZXBFcXVhbChwYXJzZVVSTCgnaHR0cHM6Ly9leGFtcGxlLmNvbTozMDAwJyksIG5ldyBVUkwoJ2h0dHBzOi8vZXhhbXBsZS5jb206MzAwMCcpLCAnVVJMIHlhbmcgZGloYXNpbGthbiB0aWRhayBzZXN1YWkuIFBhc3Rpa2FuIGZ1bmdzaSBtZW5nZW1iYWxpa2FuIG9iamVrIGRhcmkgPGNvZGU+VVJMPC9jb2RlPi4gSGFyYXAgZGljZWsga2VtYmFsaSwgeWEhJyk7CiAgYXNzZXJ0LmRlZXBFcXVhbChwYXJzZVVSTCgnaHR0cHM6Ly9leGFtcGxlLmNvbTozMDAwLycpLCBuZXcgVVJMKCdodHRwczovL2V4YW1wbGUuY29tOjMwMDAvJyksICdVUkwgeWFuZyBkaWhhc2lsa2FuIHRpZGFrIHNlc3VhaS4gUGFzdGlrYW4gZnVuZ3NpIG1lbmdlbWJhbGlrYW4gb2JqZWsgZGFyaSA8Y29kZT5VUkw8L2NvZGU+LiBIYXJhcCBkaWNlayBrZW1iYWxpLCB5YSEnKTsKICBhc3NlcnQuZGVlcEVxdWFsKHBhcnNlVVJMKCdodHRwczovL2V4YW1wbGUuY29tOjMwMDAvcGF0aCcpLCBuZXcgVVJMKCdodHRwczovL2V4YW1wbGUuY29tOjMwMDAvcGF0aCcpLCAnVVJMIHlhbmcgZGloYXNpbGthbiB0aWRhayBzZXN1YWkuIFBhc3Rpa2FuIGZ1bmdzaSBtZW5nZW1iYWxpa2FuIG9iamVrIGRhcmkgPGNvZGU+VVJMPC9jb2RlPi4gSGFyYXAgZGljZWsga2VtYmFsaSwgeWEhJyk7CiAgYXNzZXJ0LmRlZXBFcXVhbChwYXJzZVVSTCgnaHR0cHM6Ly9leGFtcGxlLmNvbTozMDAwL3BhdGgvJyksIG5ldyBVUkwoJ2h0dHBzOi8vZXhhbXBsZS5jb206MzAwMC9wYXRoLycpLCAnVVJMIHlhbmcgZGloYXNpbGthbiB0aWRhayBzZXN1YWkuIFBhc3Rpa2FuIGZ1bmdzaSBtZW5nZW1iYWxpa2FuIG9iamVrIGRhcmkgPGNvZGU+VVJMPC9jb2RlPi4gSGFyYXAgZGljZWsga2VtYmFsaSwgeWEhJyk7CiAgYXNzZXJ0LmRlZXBFcXVhbChwYXJzZVVSTCgnaHR0cHM6Ly9leGFtcGxlLmNvbTozMDAwL3BhdGg/cXVlcnk9c3RyaW5nJyksIG5ldyBVUkwoJ2h0dHBzOi8vZXhhbXBsZS5jb206MzAwMC9wYXRoP3F1ZXJ5PXN0cmluZycpLCAnVVJMIHlhbmcgZGloYXNpbGthbiB0aWRhayBzZXN1YWkuIFBhc3Rpa2FuIGZ1bmdzaSBtZW5nZW1iYWxpa2FuIG9iamVrIGRhcmkgPGNvZGU+VVJMPC9jb2RlPi4gSmFuZ2FuIHNhbXBhaSBzYWxhaCwgeWEhIF5fXicpOwogIGFzc2VydC5kZWVwRXF1YWwocGFyc2VVUkwoJ2h0dHBzOi8vZXhhbXBsZS5jb206MzAwMC9wYXRoLz9xdWVyeT1zdHJpbmcnKSwgbmV3IFVSTCgnaHR0cHM6Ly9leGFtcGxlLmNvbTozMDAwL3BhdGgvP3F1ZXJ5PXN0cmluZycpLCAnVVJMIHlhbmcgZGloYXNpbGthbiB0aWRhayBzZXN1YWkuIFBhc3Rpa2FuIGZ1bmdzaSBtZW5nZW1iYWxpa2FuIG9iamVrIGRhcmkgPGNvZGU+VVJMPC9jb2RlPi4gSmFuZ2FuIHNhbXBhaSBzYWxhaCwgeWEhIF5fXicpOwoKICBhc3NlcnQuZG9lc05vdFRocm93KCgpID0+IHBhcnNlVVJMKCdkaWNvZGluZycpLCAnRnVuZ3NpIHBhcnNlVXJsIHRpZGFrIGJvbGVoIG1lbWJhbmdraXRrYW4gZXJyb3IgamlrYSBVUkwgdGlkYWsgdmFsaWQuIEhhcmFwIGRpY2VrIGtlbWJhbGksIHlhISBeX14nKTsKICBhc3NlcnQuZG9lc05vdFRocm93KCgpID0+IHBhcnNlVVJMKCdkaWNvZGluZy5jb20nKSwgJ0Z1bmdzaSBwYXJzZVVybCB0aWRhayBib2xlaCBtZW1iYW5na2l0a2FuIGVycm9yIGppa2EgVVJMIHRpZGFrIHZhbGlkLiBIYXJhcCBkaWNlayBrZW1iYWxpLCB5YSEgXl9eJyk7CiAgYXNzZXJ0LmVxdWFsKHBhcnNlVVJMKCdkaWNvZGluZy5jb20nKSwgbnVsbCwgJ0Z1bmdzaSBwYXJzZVVybCBoYXJ1cyBtZW5nZW1iYWxpa2FuIG5pbGFpIG51bGwgamlrYSBVUkwgdGlkYWsgdmFsaWQuIEhhcmFwIGRpY2VrIGtlbWJhbGksIHlhISBeX14nKTsKfSBjYXRjaCAoZXJyb3IpIHsKICBpZiAoZXJyb3IubmFtZSA9PT0gJ0Fzc2VydGlvbkVycm9yJykgewogICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTsKICAgIHByb2Nlc3MuZXhpdCgxKTsKICB9IGVsc2UgewogICAgY29uc29sZS5lcnJvcihgS2FtaSBnYWdhbCBtZW5ndWppIGtvZGUgeWFuZyBrYW11IHR1bGlzLiBCZXJpa3V0IGVycm9yIHlhbmcgZGloYXNpbGthbjogJHtlcnJvci5tZXNzYWdlfSBTaW1hayBlcnJvciB0ZXJzZWJ1dCBkYW4gcGFzdGlrYW4ga2FtdSBzdWRhaCBtZW51bGlza2FuIGtvZGUgZGVuZ2FuIGJlbmFyLCB5YSFgKTsKICAgIHByb2Nlc3MuZXhpdCgxKTsKICB9Cn0K';
    const appJSTestCode = originalUserCode + Buffer.from(additionalCodeToTest, 'base64').toString('utf-8');

    fs.writeFileSync(join(__dirname, 'app.testing.js'), appJSTestCode);

    execSync('node app.testing.js', { cwd: __dirname, stdio: 'pipe' });

    console.log('passed!');
  } catch (error) {
    const { stderr } = error;
    console.log(stderr.toString());
  } finally {
    fs.unlinkSync(join(__dirname, 'app.testing.js'));
  }
})();
