#!/usr/bin/env bash
npx aws-api-gateway-cli-test \
--username='admin@maddy.com' \
--password='Krishna28*' \
--user-pool-id='us-east-2_WqPdbYHCZ' \
--app-client-id='6jv3dtb4dqd7tjsot96oq4uh7e' \
--cognito-region='us-east-2' \
--identity-pool-id='us-east-2:f68e8c2c-a6ab-470d-bae0-fe3a77173650' \
--invoke-url='https://s1yy8m4t99.execute-api.us-east-2.amazonaws.com/dev' \
--api-gateway-region='us-east-2' \
--path-template='/notes' \
--method='POST' \
--body='{"content":"API Gateway CLI Test","attachment":"api-gw-test.jpg"}'
