export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
          <tr>
            <td>Q4</td>
            <td align="center">DOM Manipulation</td>
            <td align="center">2/24/21</td>
            <td align="right">88</td>
          </tr>
          <tr>
            <td>Q5</td>
            <td align="center">React Components</td>
            <td align="center">3/3/21</td>
            <td align="right">92</td>
          </tr>
          <tr>
            <td>Q6</td>
            <td align="center">React State and Props</td>
            <td align="center">3/10/21</td>
            <td align="right">94</td>
          </tr>
          <tr>
            <td>Q7</td>
            <td align="center">Routing</td>
            <td align="center">3/17/21</td>
            <td align="right">87</td>
          </tr>
          <tr>
            <td>Q8</td>
            <td align="center">Node.js and Express</td>
            <td align="center">3/24/21</td>
            <td align="right">91</td>
          </tr>
          <tr>
            <td>Q9</td>
            <td align="center">REST APIs</td>
            <td align="center">3/31/21</td>
            <td align="right">96</td>
          </tr>
          <tr>
            <td>Q10</td>
            <td align="center">Database Integration</td>
            <td align="center">4/7/21</td>
            <td align="right">89</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90.7</td>
          </tr>
        </tfoot>
      </table>

      <div id="wd-your-table">  
        <p>My favorite Valorant maps and the best agents to play on them:</p>
        <table border={1} width="100%">
            <thead>
                <tr>
                    <th>Valorant Maps</th>
                    <th align="center">Tier A Agents</th>
                    <th align="center">Tier B Agents</th>
                    <th align="center">Tier C Agents</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ascent</td>
                    <td align="center">Sova, Omen, Reyna, Jett</td>
                    <td align="center">KJ, Cypher, KAY/O</td>
                    <td align="center">Clove, Miks</td>
                </tr>
                <tr>
                    <td>Abyss</td>
                    <td align="center">Sova, Reyna</td>
                    <td align="center">Astra, Jett</td>
                    <td align="center">Chamber</td>
                </tr>
                <tr>
                    <td>Haven</td>
                    <td align="center">Sova, Omen, Reyna</td>
                    <td align="center">Jett, Neon, KJ</td>
                    <td align="center">Chamber, Viper</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}
