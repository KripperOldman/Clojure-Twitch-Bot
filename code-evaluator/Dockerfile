FROM openjdk:8-jre-alpine

WORKDIR /app

ENV HOME=/app
ENV PORT=80

EXPOSE $PORT

COPY .java.policy $JAVA_HOME/lib/security/java.policy
COPY target/uberjar/code-evaluator.jar app.jar

CMD java -jar app.jar -Djava.security.manager
# -Djava.security.policy=java.policy
