import React from "react";
import styled from "styled-components";
import Chart from "../common/Chart";
import { LineChart, Line, XAxis, Tooltip, CartesianGrid } from "recharts";

const CardImageOverlay = styled.div`
  background: rgba(255, 255, 255, 0.5);
`;

const CardTitle = styled.h3`
  display: block;
  /* margin-top: -55px; */
`;

const ListView = styled.div`
  height: 80vh;
`;

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="col-md-12 text-right">
            <CardTitle className="card-title ">Choose your Category</CardTitle>
            {/* Category Description */}
            <div className="card bg-dark">
              <img
                className="card-img"
                src="https://picsum.photos/300/100"
                alt="Card image"
              />
              <CardImageOverlay className="card-img-overlay">
                <p className="card-text ">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </CardImageOverlay>
            </div>
          </div>
          <div className="col-md-12 my-4">
            {/* Buttons */}

            <button className="btn btn-outline-secondary btn-lg mr-3">
              Allxxxx
            </button>
            <button className="btn btn-outline-secondary btn-lg mr-3">
              All
            </button>
            <button className="btn btn-outline-secondary btn-lg mr-3">
              All
            </button>
            <button className="btn btn-outline-secondary btn-lg mr-3">
              All
            </button>
            <button className="btn btn-outline-secondary btn-lg mr-3">
              All
            </button>
          </div>
          <div className="col-md-12">
            {/* Data Visual */}
            <Chart
              data={[
                {
                  date: 1,
                  ph: 6
                },
                {
                  date: 2,
                  ph: 8
                },
                {
                  date: 3,
                  ph: 10
                },
                {
                  date: 4,
                  ph: 7
                },
                {
                  date: 5,
                  ph: 12
                },
                {
                  date: 1,
                  ph: 6
                }
              ]}
              dataKey="date"
              domainY={[6, 12]}
            >
              <Line
                strokeWidth={2}
                legendType="triangle"
                name="Immigration"
                dot={false}
                dataKey="ph"
                type="monotone"
                connectNulls={true}
                stroke="#00e64d"
              />
            </Chart>
          </div>
        </div>
        <ListView className="col-md-6 overflow-auto">
          {/* Application List */}
          <div className="list-group">
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action flex-column align-items-start mb-2"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small className="text-muted">3 days ago</small>
              </div>
              <p className="mb-1">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
            </a>
          </div>
        </ListView>
      </div>
    </div>
  );
}
