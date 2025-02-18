import { mysqlp as mysql } from '../../index.js';
import { access, uriAccess } from '../baseConnection.js';

const poolCluster = mysql.createPoolCluster();

// Overload: poolCluster.add(group, connectionUri);
poolCluster.add('cluster1', uriAccess);
// Overload: poolCluster.add(group, config);
poolCluster.add('cluster2', access);
// Overload: poolCluster.add(config);
poolCluster.add(access);

// @ts-expect-error: The option to pass only `URI` doesn't exists
poolCluster.add(uriAccess);
