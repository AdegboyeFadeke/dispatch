
module.exports = { 
    /**
   *  port
   */
  PORT: require('./port'),
  DATABASE: require('./database'),
  /**
     * Credentials for the AWS Logs
   */
MODEL: ['HEAVYWEIGHT', 'LIGHTWEIGHT', 'CRUISERWEIGHT', 'MIDDLEWEIGHT'],
DISPATCHSTATE: ['IDLE', 'LOADING', 'DELIEVERING', 'DELEIVERED', 'RETURNING'],
}