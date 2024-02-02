import { ACTION, AuditLog } from '@prisma/client';

const getActionType = (action: ACTION) => {
  switch (action) {
    case ACTION.CREATE:
      return 'created';
    case ACTION.UPDATE:
      return 'updated';
    case ACTION.DELETE:
      return 'deleted';
    default:
      return 'unknown action';
  }
};

export function generateLogMessage(log: AuditLog) {
  const { action, entityTitle, entityType } = log;

  const actionEntity = `${entityType.toLowerCase()} "${entityTitle}"`;
  const actionType = getActionType(action);

  return `${actionType} ${actionEntity}`;
}
