export default function guardrail(mathFunction) {
  const queue = [];

  try {
    const val = mathFunction();
    queue.push(val);
  } catch (e) {
    queue.push(String(e));
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
