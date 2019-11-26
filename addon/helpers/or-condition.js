import { helper } from '@ember/component/helper';

export function orCondition([a, b]) {
  return a || b;
}

export default helper(orCondition);
