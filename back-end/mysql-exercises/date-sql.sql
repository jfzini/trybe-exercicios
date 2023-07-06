# TO CONVERT NOW() OR CURRENT_TIMESTAMP() TO BRAZILIAN (OR ANYWHERE ELSE) TIME ZONE
SELECT CONVERT_TZ(NOW(), 'UTC', 'America/Sao_Paulo') AS TODAY;

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

SELECT DATEDIFF('2030-01-20', NOW());

SELECT TIMEDIFF('10:25:45', '11:00:00');

