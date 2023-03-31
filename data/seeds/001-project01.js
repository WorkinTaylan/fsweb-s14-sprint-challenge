/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').insert([
    {project_name: 'Frontend-Final', project_description:"Prepare personal website", project_completed:false},
    {project_name: 'Backend-Final', project_description:"connect server to your website",project_completed:false},
    {project_name: 'Learn Language', project_description:"Learn Chinese",project_completed:false},
  ]);

  await knex('resources').insert([
    {resource_name: 'Figma Template', resource_description:"Using given design by seniors"},
    {resource_name: 'Knex documentation', resource_description:"Read and interpret"},
    {resource_name: 'Youtube', resource_description:"Social media"},
    {resource_name: 'Duolingo', resource_description:"Daily quizzes"}
  ]);

  await knex('tasks').insert([
    {task_description: 'Use CSS properties from Figma', task_notes:"Do not use absolute, pay attention Responsive",project_id:1},
    {task_description: 'Read and do not lose yourself', task_notes:"You already lost in",project_id:2},
    {task_description: 'Sign in duolingo and choose Chinese', task_notes:"中国人",project_id:3},
    {task_description: 'Search chinese tutorial', task_notes:"Find channel",project_id:3},
  ]);

  await knex('project_resources').insert([
    {project_id: 1, resource_id:1},
    {project_id: 2, resource_id:2},
    {project_id: 3, resource_id:3},
    {project_id: 3, resource_id:4},
  ]);

};
