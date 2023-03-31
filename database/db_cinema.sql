-- Excluir o banco de dados, caso já exista
DROP DATABASE IF EXISTS cinema;

CREATE DATABASE cinema;

USE cinema;

CREATE TABLE generos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE filmes (
  id INT NOT NULL AUTO_INCREMENT,
  cartaz VARCHAR(255) NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  censura INT NOT NULL,
  trailer VARCHAR(255) NOT NULL,
  sinopse TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE filmes_generos (
  filme_id INT NOT NULL,
  genero_id INT NOT NULL,
  FOREIGN KEY (filme_id) REFERENCES filmes(id),
  FOREIGN KEY (genero_id) REFERENCES generos(id)
);

CREATE TABLE administradores (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);
INSERT INTO administradores (nome, email, senha) VALUES
('Admin', 'admin@example.com', 'senha123');



INSERT INTO generos (nome) VALUES
  ('Drama'),
  ('Suspense'),
  ('Terror'),
  ('Ação'),
  ('Aventura'),
  ('Ficção'),
  ('Fantasia'),
  ('Animação'),
  ('Documentário');

INSERT INTO filmes (cartaz, titulo, censura, trailer, sinopse) 
VALUES 
('https://exemplo.com/filme1.jpg', 'Filme 1', 16, 'https://www.youtube.com/watch?v=123456', 'Sinopse do Filme 1'),
('https://exemplo.com/filme2.jpg', 'Filme 2', 12, 'https://www.youtube.com/watch?v=789012', 'Sinopse do Filme 2');

INSERT INTO filmes (cartaz, titulo, censura, trailer, sinopse) VALUES
('https://exemplo.com/cartaz5.jpg', 'Filme 5', 12, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Sinopse do filme 5'),
('https://exemplo.com/cartaz6.jpg', 'Filme 6', 16, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Sinopse do filme 6');

INSERT INTO filmes_generos (filme_id, genero_id) VALUES
(3, 1), (3, 3), (3, 4), (4, 2), (4, 3), (4, 5);


INSERT INTO filmes_generos (filme_id, genero_id) 
VALUES 
(1, 1), (1, 2), (1, 4), 
(2, 2), (2, 3), (2, 5);


-- Consultar todos os filmes e seus gêneros correspondentes:
SELECT filmes.titulo, GROUP_CONCAT(generos.nome SEPARATOR ', ') AS generos
FROM filmes
JOIN filmes_generos ON filmes.id = filmes_generos.filme_id
JOIN generos ON filmes_generos.genero_id = generos.id
GROUP BY filmes.id;

-- Consultar todos os filmes de um determinado gênero:
SELECT filmes.titulo, GROUP_CONCAT(generos.nome SEPARATOR ', ') AS generos
FROM filmes
JOIN filmes_generos ON filmes.id = filmes_generos.filme_id
JOIN generos ON filmes_generos.genero_id = generos.id
WHERE generos.nome = 'ação'
GROUP BY filmes.id;

-- Consultar os gêneros mais populares:
SELECT generos.nome, COUNT(*) AS total_filmes
FROM generos
JOIN filmes_generos ON generos.id = filmes_generos.genero_id
GROUP BY generos.id
ORDER BY total_filmes DESC;


