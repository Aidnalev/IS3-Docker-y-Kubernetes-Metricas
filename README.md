# Análisis de Desempeño y Despliegue de Aplicación Full-Stack

## Autores

- Miguel Daniel Velandia Pinilla - 2182073  
- Juan Daniel Suarez Jaimes - 2182043  
- Juan Sebastian Espinosa Espinosa - 2183184  

---

## 📌 Descripción

Este proyecto documenta el análisis de rendimiento de una aplicación full-stack bajo distintos escenarios de despliegue. Se evaluó el comportamiento de la aplicación usando pruebas de carga con Apache JMeter, analizando métricas como el tiempo de respuesta y throughput.

---

## 🛠️ Tecnologías Usadas

- Node.js + Express (backend)
- MongoDB Atlas (base de datos)
- Nginx (servidor estático para el frontend)
- Docker & Docker Compose
- Kubernetes (Minikube)
- Python (análisis de datos con pandas, matplotlib, seaborn)
- Apache JMeter (pruebas de carga)

---

## 📦 Escenarios de Despliegue

### Escenario 1: Docker + Docker Compose

- Backend y frontend en contenedores separados
- Comunicación interna entre servicios
- Conexión a MongoDB Atlas mediante variable de entorno
- Despliegue rápido y replicable

### Escenario 2: Kubernetes (1 nodo)

- Cluster con Minikube y diferentes réplicas (1, 2, 3)
- Servicios expuestos como `ClusterIP` y `NodePort`
- Evaluación del rendimiento bajo escalado horizontal

### Escenario 3: Kubernetes (2 nodos)

- Despliegue distribuido con múltiples réplicas
- Evaluación de desempeño distribuido y latencia entre nodos

---

## 📈 Métricas Evaluadas

- **Tiempo Medio de Respuesta** (`elapsed`)
- **Throughput Promedio** (peticiones/segundo)
- **Escalabilidad Horizontal**

---

## 🔍 Análisis

- **Escenario más eficiente:** Docker Compose (Escenario 1)
- **Cuellos de botella identificados:**
  - Latencia de red (acceso a MongoDB Atlas)
  - Carga sobre CPU en entornos con pocos recursos
- **Recomendación:** Escalar horizontalmente, asegurando que la base de datos también pueda escalar para evitar cuellos de botella.

---

## ▶️ Cómo Ejecutar el Proyecto

### Escenario 1

```bash
docker-compose up --build -d
```

Acceder a:

- Frontend: [http://localhost:8080](http://localhost:8080)
- Backend: [http://localhost:5000/posts](http://localhost:5000/posts)

### Escenario 2

```bash
minikube start --driver=docker
kubectl apply -f k8s/
minikube service frontend-service
```

---

## 📊 Visualización de Datos

Se utilizaron notebooks de Google Colab para procesar y graficar los datos recolectados desde Apache JMeter. Las gráficas incluyen:

- Tiempo medio de respuesta por escenario y número de réplicas
- Throughput a lo largo del tiempo

---

## 📁 Estructura del Proyecto

```
ProyectoFinal/
├── frontend/
│   └── Dockerfile
├── server/
│   └── Dockerfile
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   └── frontend-service.yaml
├── .env
├── docker-compose.yml
└── ProyectoPrincipios.ipynb
```

---

## 📎 Enlace al Notebook

[Notebook en Google Colab](https://colab.research.google.com/drive/1yXstx0xEaCl90NRAUvnOpCwbkcINXxTd?usp=sharing)

---
