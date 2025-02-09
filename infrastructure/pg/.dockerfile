FROM postgres:latest

RUN apt-get update && apt-get install -y \
    postgresql-server-dev-all \
    make gcc g++ git \
    && git clone --depth 1 https://github.com/pgvector/pgvector.git \
    && cd pgvector \
    && make \
    && make install \
    && cd .. \
    && rm -rf pgvector \
    && apt-get remove --purge -y make gcc g++ git \
    && apt-get autoremove -y \
    && apt-get clean

CMD ["postgres"]
